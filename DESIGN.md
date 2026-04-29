# Design System Portfolio

Tài liệu này mô tả hướng thiết kế hiện tại của portfolio để agent có thể giữ tính nhất quán khi chuyển sang HTML/CSS/JS thuần.

## Tổng Quan

Phong cách hiện tại là portfolio developer hiện đại, sáng, sạch, nhiều khoảng trắng, dùng card nhẹ, shadow mềm và animation vừa phải. Giao diện ưu tiên sự rõ ràng, dễ scan thông tin và phù hợp với một portfolio cá nhân.

## Màu Sắc

Nên giữ nhóm màu hiện tại:

- Nền chính: slate rất nhạt, gần `#f8fafc`.
- Nền section/card: trắng hoặc slate nhạt.
- Text chính: slate đậm, gần `#0f172a`.
- Text phụ: slate xám, gần `#64748b`.
- Màu nhấn/CTA: blue, gần `#2563eb`.
- Hover CTA: blue đậm hơn, gần `#1d4ed8`.
- Border: slate nhạt, gần `#e2e8f0`.

Không nên biến giao diện thành một bảng màu hoàn toàn mới trong task convert. Nếu cần polish thì chỉ tinh chỉnh nhẹ.

## Typography

- Font chính: Inter.
- H1 lớn, đậm, line-height chặt.
- Heading section rõ ràng, không quá trang trí.
- Body text dễ đọc, line-height rộng vừa phải.

## Layout

- Container tối đa gần `1280px`.
- Padding ngang trên mobile khoảng `16px`.
- Section spacing rộng, khoảng `80px - 120px` trên desktop.
- Grid responsive:
  - Mobile: 1 cột.
  - Tablet/Desktop: 2 hoặc 3 cột tùy section.
- Navbar fixed trên đầu trang.

## Components

### Navbar

- Fixed top.
- Nền trắng hoặc trắng mờ với blur khi scroll.
- Logo bên trái, nav links bên phải.
- Mobile có hamburger menu.
- Active link có màu blue và underline/nền nhẹ.

### Buttons

- Primary: nền blue, chữ trắng, hover blue đậm.
- Secondary: nền trong/trắng, border slate nhẹ.
- Bo góc vừa phải, ưu tiên `8px - 12px`.

### Cards

- Nền trắng hoặc slate rất nhạt.
- Border nhẹ.
- Shadow mềm khi hover.
- Hover có thể nâng lên nhẹ bằng `transform: translateY(...)`.

### Project Card

- Ảnh preview rõ ràng.
- Title, description, tags.
- Click sang trang detail.
- Giữ tỷ lệ ảnh ổn định để layout không nhảy.

## Animation

Giữ các animation hiện tại nếu không gây phức tạp:

- `fadeInUp`
- `fadeInLeft`
- `fadeInRight`
- `scaleIn`
- `float`
- `gradientShift`
- `mobileMenuSlide`
- Scroll reveal bằng `IntersectionObserver`

Animation cần nhẹ, không làm người dùng mất tập trung.

## Responsive

- Mobile phải đọc được toàn bộ nội dung, không tràn ngang.
- Button và nav item không bị chen chữ.
- Hero layout chuyển từ 2 cột sang 1 cột.
- Project grid chuyển về 1 cột trên mobile.

## Nội Dung Demo

Portfolio hiện tại còn nhiều nội dung demo như tên `Alex`, email mẫu, project mẫu. Khi convert, có thể giữ tạm nội dung demo nếu chưa có dữ liệu thật, nhưng cần đặt ở nơi dễ sửa, ví dụ `data/profile.js` và `data/projects.js`.

