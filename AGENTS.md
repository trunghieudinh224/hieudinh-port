# Hướng Dẫn Cho Coding Agent

Dự án này là portfolio cá nhân hiện đang ở dạng React/Vite/TypeScript, được tạo từ Google AI Studio. Mục tiêu hiện tại là tạo thêm một phiên bản HTML/CSS/JavaScript thuần để chủ dự án dễ đọc, dễ sửa và dễ deploy tĩnh.

## Nguyên Tắc Quan Trọng

- Không sửa source React hiện tại nếu không được yêu cầu rõ ràng.
- Xem React app hiện tại là bản tham chiếu về cấu trúc trang, nội dung, layout và animation.
- Tất cả output code thuần phải nằm trong thư mục `static-portfolio/`, trừ khi dự án đích đã là thư mục static riêng như `hieudinh-port/`.
- Không đưa Laravel, PHP, backend, database, React, Vue, Angular, TypeScript hoặc build step vào bản code thuần.
- Bản code thuần phải chạy được bằng cách mở trực tiếp file HTML trên trình duyệt.
- Ưu tiên code rõ ràng, dễ sửa cho người mới học HTML/CSS/JS.
- Không refactor hoặc xóa các file React gốc chỉ để dọn dẹp.

## Source React Dùng Làm Tham Chiếu

- `App.tsx`
- `index.html`
- `index.css`
- `constants.tsx`
- `types.ts`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ProjectCard.tsx`
- `pages/Home.tsx`
- `pages/About.tsx`
- `pages/Projects.tsx`
- `pages/ProjectDetail.tsx`
- `pages/Contact.tsx`
- `hooks/useScrollAnimation.ts`

## Output Mong Muốn

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

Có thể thêm file nếu cần, nhưng không nên làm cấu trúc phức tạp nếu chưa có lý do rõ ràng.

## Yêu Cầu Chuyển Đổi

- Giữ cấu trúc trang tương đương React routes:
  - Home
  - About
  - Projects
  - Project detail
  - Contact
- Giữ navbar, footer và mobile menu.
- Giữ animation hiện có nếu phù hợp:
  - Fade in up
  - Fade in left/right
  - Scale in
  - Scroll reveal
  - Floating image
  - Gradient text
  - Mobile menu slide
- Chuyển logic `useScrollAnimation` sang JavaScript thuần bằng `IntersectionObserver`.
- Đưa nội dung dễ sửa như project, skill, experience, education, contact vào file data JS đơn giản khi phù hợp.
- Ưu tiên class name có ý nghĩa, tránh abstraction quá sớm.

## Tiêu Chí Hoàn Thành

- Mở file HTML trực tiếp vẫn hiển thị đúng giao diện.
- Các link giữa trang hoạt động với file HTML riêng.
- Projects render được từ data JS hoặc được viết rõ ràng trong HTML.
- Project detail đọc được dữ liệu theo query string, hash, hoặc có fallback để người dùng không gặp trang trống.
- Mobile layout không vỡ.
- Không có thay đổi ngoài ý muốn trong source React gốc.

