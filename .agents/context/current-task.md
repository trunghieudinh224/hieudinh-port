# Current Task

Chuyển portfolio hiện tại từ React/Vite/TypeScript sang bản HTML/CSS/JavaScript thuần.

## Source Reference

Dùng các file hiện có làm tham chiếu về layout, cấu trúc trang, nội dung và animation:

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

## Output

Tạo thư mục mới:

```text
static-portfolio/
```

Tất cả file HTML/CSS/JS thuần phải nằm trong thư mục này. Nếu dự án đã được tách thành thư mục riêng như `hieudinh-port/`, dùng thư mục đó làm output chính.

## Yêu Cầu

- Không sửa source React gốc.
- Giữ cấu trúc trang:
  - Home
  - About
  - Projects
  - Project detail
  - Contact
- Giữ navbar, footer, mobile menu.
- Giữ animation hiện tại nếu thực tế:
  - Hero animation
  - Scroll reveal
  - Project card hover
  - Mobile menu slide
- Chuyển data project/skill/profile sang JS thuần để dễ sửa.
- Không dùng React, TypeScript, Laravel, PHP hay backend.
- Ưu tiên code dễ đọc hơn là tối ưu hóa phức tạp.

## Kiểm Tra Sau Khi Làm

- Mở file HTML chính trực tiếp trên browser.
- Click nav giữa các trang.
- Kiểm tra mobile menu.
- Kiểm tra animation khi scroll.
- Kiểm tra project detail.
- Xác nhận không có file React gốc bị thay đổi ngoài ý muốn.

