# Workflow: Chuẩn Bị Deploy Static Portfolio

Workflow này dùng để kiểm tra và chuẩn bị bản HTML/CSS/JS thuần trước khi đưa lên hosting.

## Khi Nào Dùng

Dùng workflow này khi:

- Bản static portfolio đã chạy ổn ở local.
- Muốn deploy lên GitHub Pages, Netlify, Vercel hoặc hosting tĩnh.
- Cần kiểm tra đường dẫn asset và các trang trước khi public.

## Prompt Mẫu Cho Agent

```text
Hãy đọc AGENTS.md, DESIGN.md và .agents/workflows/deploy.md trước.

Sau đó kiểm tra bản static portfolio để chuẩn bị deploy.

Không redesign.
Không thêm framework.
Chỉ sửa những lỗi ảnh hưởng trực tiếp đến deploy, đường dẫn asset, navigation, responsive hoặc trang trắng.

Cuối cùng báo cáo:
- Có thể deploy chưa.
- Deploy folder nên chọn là gì.
- File nào đã sửa.
- Còn cần người dùng bổ sung thông tin gì.
```

## Kiểm Tra Trước Deploy

Kiểm tra các file chính:

- `index.html`
- `about.html`
- `projects.html`
- `project-detail.html`
- `contact.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `data/profile.js`
- `data/projects.js`

Nếu dự án không có đủ các file này, cần xác định đó là thiếu thật hay cấu trúc đã được đổi tên hợp lý.

## Đường Dẫn Asset

Ưu tiên dùng đường dẫn relative:

```html
<link rel="stylesheet" href="assets/css/styles.css">
<script src="assets/js/main.js"></script>
```

Tránh dùng đường dẫn bắt đầu bằng `/` nếu chưa chắc website sẽ deploy ở root domain.

Ví dụ nên tránh khi deploy GitHub Pages subfolder:

```html
<link rel="stylesheet" href="/assets/css/styles.css">
```

## Kiểm Tra Điều Hướng

Navbar nên trỏ tới:

- `index.html`
- `about.html`
- `projects.html`
- `contact.html`

Project detail nên dùng query hoặc hash rõ ràng:

```text
project-detail.html?id=project-id
```

Nếu thiếu hoặc sai id, trang detail cần có fallback.

## Kiểm Tra Responsive

Kiểm tra tối thiểu:

- Mobile khoảng 375px.
- Tablet khoảng 768px.
- Desktop khoảng 1280px.

Các lỗi cần sửa:

- Tràn ngang.
- Button bị vỡ chữ.
- Navbar che nội dung.
- Hero quá cao làm mất nội dung chính.
- Project grid không xuống dòng đúng.

## Kiểm Tra Contact

Nếu chưa có backend, form contact cần có một trong các hướng rõ ràng:

- `mailto:`.
- Link social.
- Form service như Formspree/Netlify Forms nếu người dùng muốn.
- Hoặc ghi chú rõ form hiện chỉ là UI.

Không tạo backend chỉ để xử lý contact nếu chưa được yêu cầu.

## Nơi Có Thể Deploy

- GitHub Pages.
- Netlify.
- Vercel.
- Static hosting thông thường.

## Đầu Ra Mong Muốn

Agent phải báo cáo:

- Thư mục nên deploy.
- Các lỗi deploy đã sửa.
- Các file đã sửa.
- Các bước deploy ngắn gọn phù hợp với nền tảng được chọn.

## Tiêu Chí Hoàn Thành

Workflow hoàn thành khi:

- Trang mở được ở local.
- Đường dẫn CSS/JS/image phù hợp với static hosting.
- Navigation giữa các trang hoạt động.
- Không còn lỗi rõ ràng chặn deploy.

