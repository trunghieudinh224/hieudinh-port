# Workflow: Chuyển Portfolio Sang HTML/CSS/JS Thuần

Workflow này dùng khi muốn chuyển portfolio hiện tại sang bản code thuần, dễ sửa, dễ deploy, không phụ thuộc React/Vite.

## Khi Nào Dùng

Dùng workflow này khi:

- Dự án hiện tại đang là React/Vite hoặc được tạo từ Google AI Studio.
- Muốn giữ giao diện, cấu trúc trang và animation hiện có.
- Muốn tạo bản HTML/CSS/JS thuần trong một thư mục riêng.
- Không muốn sửa hoặc xóa source React gốc.

## Đầu Vào

Trước khi làm, agent phải đọc các file sau:

- `AGENTS.md`
- `GEMINI.md`
- `DESIGN.md`
- `.agents/context/project-overview.md`
- `.agents/context/current-task.md`
- `.agents/rules/coding-rules.md`
- `.agents/rules/frontend-architecture.md`
- `.agents/rules/design-guidelines.md`

Sau đó đọc source tham chiếu:

- `App.tsx`
- `index.css`
- `constants.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ProjectCard.tsx`
- `pages/Home.tsx`
- `pages/About.tsx`
- `pages/Projects.tsx`
- `pages/ProjectDetail.tsx`
- `pages/Contact.tsx`
- `hooks/useScrollAnimation.ts`

## Prompt Mẫu Cho Antigravity

```text
Hãy đọc AGENTS.md, GEMINI.md, DESIGN.md và toàn bộ file trong .agents/context, .agents/rules, .agents/workflows trước.

Sau đó thực hiện workflow .agents/workflows/static-conversion.md.

Mục tiêu: chuyển portfolio hiện tại sang HTML/CSS/JS thuần, giữ cấu trúc trang và animation hiện tại.

Yêu cầu quan trọng:
- Không sửa source React gốc.
- Chỉ tạo hoặc sửa file trong thư mục static-portfolio/.
- Không dùng React, TypeScript, Laravel, PHP hoặc backend.
- Code phải dễ đọc, dễ sửa cho người mới học HTML/CSS/JS.
- Sau khi xong, báo cáo file đã tạo/sửa và cách mở thử.
```

## Các Bước Thực Hiện

### 1. Khảo Sát Source

Xác định:

- Các route/trang hiện có.
- Các section trong từng trang.
- Data nằm ở đâu.
- Animation nào cần giữ.
- Component nào cần chuyển sang HTML/CSS/JS.

Không chỉnh code ở bước này.

### 2. Tạo Cấu Trúc Static

Tạo hoặc cập nhật:

```text
static-portfolio/
├── index.html
├── about.html
├── projects.html
├── project-detail.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
└── data/
    ├── profile.js
    └── projects.js
```

Nếu dự án đích đã là thư mục static rồi, ví dụ `hieudinh-port/`, thì dùng chính thư mục đó làm output, không cần tạo thêm `static-portfolio/`.

### 3. Chuyển Data

Chuyển dữ liệu từ `constants.tsx` sang JavaScript thuần:

- Project.
- Skill.
- Experience.
- Education.
- Contact/social links nếu có.

Data phải dễ sửa, tránh lồng cấu trúc quá phức tạp.

### 4. Chuyển Layout

Chuyển theo thứ tự:

1. Navbar và footer.
2. Home.
3. Projects.
4. Project detail.
5. About.
6. Contact.

Ưu tiên hoàn thiện từng trang chạy được trước, sau đó mới polish.

### 5. Chuyển Animation

Chuyển CSS animation từ `index.css` sang `assets/css/styles.css`.

Chuyển logic scroll reveal từ React hook sang JavaScript thuần bằng `IntersectionObserver`.

Các animation nên giữ:

- Fade in up.
- Fade in left/right.
- Scale in.
- Floating hero image.
- Gradient text.
- Mobile menu slide.
- Project card hover.

### 6. Kiểm Tra

Kiểm tra tối thiểu:

- Mở `index.html` trực tiếp trên trình duyệt.
- Click navbar giữa các trang.
- Mở project detail.
- Thử mobile menu.
- Scroll để xem animation.
- Kiểm tra mobile không bị tràn ngang.
- Xác nhận source React gốc không bị sửa ngoài ý muốn.

## Đầu Ra Mong Muốn

Agent phải báo cáo:

- Các file đã tạo/sửa.
- Trang nào đã hoàn thành.
- Cách mở thử local.
- Những điểm còn cần review hoặc polish.

## Tiêu Chí Hoàn Thành

Workflow chỉ được xem là hoàn thành khi:

- Portfolio HTML/CSS/JS mở được.
- Điều hướng giữa các trang hoạt động.
- Animation chính hoạt động.
- Dữ liệu project/contact dễ sửa.
- Không dùng framework.
- Không làm thay đổi source React gốc nếu không được yêu cầu.

