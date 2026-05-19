# Coding Rules

## Nguyên Tắc Chung

- Viết code đơn giản, rõ ràng, ưu tiên người mới dễ sửa.
- Tên class, biến và function nên có ý nghĩa.
- Không thêm framework nếu không được yêu cầu.
- Không tạo abstraction phức tạp khi HTML/CSS/JS trực tiếp đã đủ.
- Không xóa source React gốc.

## HTML

- Mỗi trang nên có cấu trúc semantic cơ bản: `header`, `main`, `section`, `footer`.
- Link điều hướng dùng file HTML trực tiếp, ví dụ `about.html`, `projects.html`.
- Ảnh cần có `alt` rõ ràng.
- Form contact có label đầy đủ.

## CSS

- Dùng một file chính: `assets/css/styles.css`.
- Định nghĩa biến CSS cho màu, spacing, shadow, radius.
- Giữ responsive bằng media queries rõ ràng.
- Tránh style inline trừ khi thật sự cần.
- Không dùng Tailwind CDN trong bản code thuần.

## JavaScript

- Dùng một file chính: `assets/js/main.js`.
- Nếu tách data, đặt trong `data/`.
- Dùng `IntersectionObserver` cho scroll reveal.
- Không dùng dependency ngoài nếu không cần.
- Code phải chạy khi mở file HTML trực tiếp, không phụ thuộc dev server.

## Dữ Liệu

- Project, skill, experience, education và contact nên để trong file data JS đơn giản khi phù hợp.
- Nội dung demo cần để ở nơi dễ thay thế.
- Link rỗng nên có fallback hợp lý, tránh nút chết nếu có thể.

