# Frontend Architecture

## Mục Tiêu

Kiến trúc của bản HTML/CSS/JS thuần cần dễ hiểu, dễ sửa và dễ deploy tĩnh.

## Cấu Trúc Thư Mục Đề Xuất

```text
static-portfolio/
├── index.html
├── about.html
├── projects.html
├── project-detail.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── data/
    ├── profile.js
    └── projects.js
```

Nếu dự án đã được tách thành thư mục static riêng như `hieudinh-port/`, cấu trúc trên áp dụng trực tiếp tại root của thư mục đó.

## Trang

- `index.html`: Home, hero, about preview, skills, featured projects, contact CTA.
- `about.html`: thông tin cá nhân, experience, education.
- `projects.html`: danh sách project, filter nếu cần.
- `project-detail.html`: chi tiết project theo id/query string/hash hoặc fallback.
- `contact.html`: thông tin liên hệ và form/link liên hệ.

## JavaScript Module

Nếu cần dùng nhiều file JS, giữ phân chia đơn giản:

- `data/profile.js`: thông tin cá nhân, skill, experience, education, contact.
- `data/projects.js`: danh sách project.
- `assets/js/main.js`: render UI, mobile menu, animation, project detail.

Không cần bundler. Nếu dùng ES module, các script phải hoạt động khi mở bằng browser hiện đại. Nếu việc mở trực tiếp bị chặn do CORS/module, ưu tiên script thường để đảm bảo dễ chạy.

## Routing

Không dùng router framework. Mỗi trang là một file HTML riêng. Project detail có thể dùng:

- `project-detail.html?id=fintrack-pro`
- hoặc `project-detail.html#fintrack-pro`

Cần có fallback nếu id không tồn tại.

