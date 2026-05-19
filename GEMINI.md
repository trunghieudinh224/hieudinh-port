# Hướng Dẫn Riêng Cho Gemini / Antigravity

Hãy đọc file này trước khi thực hiện task trong dự án.

## Mục Tiêu Chính

Chuyển portfolio hiện tại từ React/Vite sang một phiên bản HTML/CSS/JavaScript thuần, nằm riêng trong `static-portfolio/` hoặc thư mục static đích, để chủ dự án có thể dễ đọc, dễ sửa và dễ deploy mà không cần học React ngay.

## Không Được Làm

- Không sửa các file React gốc nếu prompt không yêu cầu rõ ràng.
- Không xóa `pages/`, `components/`, `hooks/`, `App.tsx`, `constants.tsx`, `index.tsx`.
- Không tạo Laravel, PHP, database, admin panel hay backend.
- Không thêm React, Vue, Angular, TypeScript hoặc bundler cho bản code thuần.
- Không biến task thành một redesign mới nếu không được yêu cầu.

## Cần Làm

- Dùng React app hiện tại làm bản tham chiếu về giao diện, cấu trúc trang và animation.
- Tạo output trong `static-portfolio/` hoặc thư mục static đích đã được chỉ định.
- Dùng HTML, CSS và JavaScript thuần.
- Giữ trải nghiệm điều hướng gồm:
  - `index.html`
  - `about.html`
  - `projects.html`
  - `project-detail.html`
  - `contact.html`
- Giữ mobile menu, project cards, project detail và scroll animation.
- Làm code rõ ràng cho người mới có thể sửa text, link, project, skill và contact.

## File Nên Đọc Trước

- `AGENTS.md`
- `DESIGN.md`
- `.agents/context/project-overview.md`
- `.agents/context/current-task.md`
- `.agents/rules/coding-rules.md`
- `.agents/rules/frontend-architecture.md`
- `.agents/rules/design-guidelines.md`
- `.agents/workflows/static-conversion.md`
- `.agents/workflows/review.md`
- `.agents/workflows/deploy.md`

## Cách Kiểm Tra

Sau khi làm xong, hãy kiểm tra:

- File HTML chính mở trực tiếp được trên trình duyệt.
- Navbar di chuyển giữa các trang đúng.
- Mobile menu đóng/mở được.
- Scroll reveal animation vẫn chạy.
- Trang project detail có nội dung hợp lệ.
- Source React gốc không bị thay đổi ngoài ý muốn.

