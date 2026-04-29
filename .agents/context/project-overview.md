# Tổng Quan Dự Án

Đây là dự án portfolio cá nhân của Trung Hiếu. Repo hiện tại được tạo từ Google AI Studio và đang chạy bằng React/Vite/TypeScript.

Chủ dự án chưa quen React, nên mục tiêu gần nhất là tạo thêm một phiên bản code thuần bằng HTML/CSS/JavaScript để dễ sửa và dễ deploy. Phiên bản React hiện tại được giữ nguyên làm mẫu tham chiếu, không phải core phát triển tiếp trong task convert.

## Trang Hiện Có Trong React

- Home
- About
- Projects
- Project detail
- Contact

## Thành Phần Hiện Có

- Navbar
- Footer
- ProjectCard
- Scroll animation hook
- Data mẫu trong `constants.tsx`

## Định Hướng Kỹ Thuật

- Bản mới nằm trong `static-portfolio/`, hoặc thư mục static đích nếu đã được chuyển ra dự án riêng.
- Chạy trực tiếp trên browser, không cần build.
- Dùng HTML/CSS/JS thuần.
- Nội dung và data nên được tách để dễ sửa.
- Không cần backend, database, admin panel hay Laravel.

