#!/usr/bin/python3
import sys
import re
from collections import defaultdict

def parse_line(line):
    """Parse a single line of the log and return (file_size, status_code) or None if invalid."""
    pattern = r'^(\d+\.\d+\.\d+\.\d+) - \[([^\]]+)\] "GET /projects/260 HTTP/1\.1" (\d{3}) (\d+)$'
    match = re.match(pattern, line)
    if match:
        ip_address, date, status_code, file_size = match.groups()
        return int(file_size), int(status_code)
    return None

def print_metrics(file_size_total, status_code_count):
    """Print the computed metrics."""
    print(f"Total file size: File size: {file_size_total}")
    for code in sorted(status_code_count):
        print(f"{code}: {status_code_count[code]}")

def main():
    file_size_total = 0
    status_code_count = defaultdict(int)
    line_count = 0

    try:
        for line in sys.stdin:
            result = parse_line(line)
            if result:
                file_size, status_code = result
                file_size_total += file_size
                if status_code in {200, 301, 400, 401, 403, 404, 405, 500}:
                    status_code_count[status_code] += 1

            line_count += 1
            if line_count % 10 == 0:
                print_metrics(file_size_total, status_code_count)

    except KeyboardInterrupt:
        print_metrics(file_size_total, status_code_count)
        sys.exit(0)

if __name__ == "__main__":
    main()
