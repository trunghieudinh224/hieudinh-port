# Workflow: Review Bản Static Portfolio

Workflow này dùng sau khi đã có bản HTML/CSS/JS thuần để kiểm tra lỗi, rủi ro và điểm cần sửa trước khi deploy.

## Khi Nào Dùng

Dùng workflow này khi:

- Antigravity hoặc một agent khác vừa chuyển source sang HTML/CSS/JS.
- Cần Codex review lại chất lượng code.
- Cần kiểm tra layout, animation, navigation và khả năng deploy static.

## Prompt Mẫu Cho Codex

```text
Hãy đọc AGENTS.md, DESIGN.md và .agents/workflows/review.md trước.

Sau đó review bản HTML/CSS/JS hiện tại.

Ưu tiên tìm lỗi thực tế:
- Trang không mở được.
- Link sai.
- JavaScript crash.
- Mobile menu lỗi.
- Project detail không render đúng.
- CSS/animation làm layout vỡ.
- Đường dẫn asset không phù hợp khi deploy static.

Nếu có lỗi nhỏ có thể sửa an toàn, hãy sửa trực tiếp.
Sau đó báo cáo file đã sửa và những rủi ro còn lại.
```

## Phạm Vi Review

Kiểm tra các nhóm sau:

- HTML semantic và cấu trúc trang.
- CSS, responsive, spacing, typography.
- JavaScript cho mobile menu, render data, project detail, scroll animation.
- Đường dẫn asset, CSS, JS, image.
- Khả năng mở file trực tiếp.
- Khả năng deploy lên GitHub Pages, Netlify, Vercel hoặc static hosting.

## Checklist Lỗi Nghiêm Trọng

Cần sửa ngay nếu gặp:

- Trang trắng.
- JavaScript lỗi khiến phần chính không render.
- Navbar link sai.
- Mobile menu không mở/đóng được.
- Project detail không có fallback khi thiếu id.
- CSS/JS dùng đường dẫn tuyệt đối `/...` gây lỗi khi deploy subfolder.
- File chính bị thiếu: `index.html`, `assets/css/styles.css`, `assets/js/main.js`.

## Checklist Lỗi Trung Bình

Cần cân nhắc sửa nếu gặp:

- Layout mobile bị tràn ngang.
- Card bị lệch chiều cao quá nhiều.
- Text tràn khỏi button/card.
- Animation gây giật hoặc che nội dung.
- Form contact không có label hoặc không có hành vi rõ ràng.
- Data còn nằm rải rác khó sửa.

## Checklist Lỗi Nhỏ

Có thể sửa nếu không làm tăng phạm vi:

- Tên class chưa rõ.
- CSS bị lặp nhiều.
- Khoảng cách chưa đều.
- Hover state thiếu nhất quán.
- Nội dung demo chưa gom về data.

## Cách Báo Cáo

Báo cáo theo thứ tự:

1. Lỗi đã tìm thấy, ưu tiên lỗi nghiêm trọng trước.
2. File đã sửa.
3. Kiểm tra đã chạy.
4. Rủi ro còn lại.

Nếu không thấy lỗi nghiêm trọng, nói rõ là không thấy lỗi nghiêm trọng và nêu phần chưa kiểm tra được nếu có.

## Tiêu Chí Hoàn Thành

Review hoàn thành khi:

- Các lỗi làm hỏng trang đã được sửa hoặc được báo cáo rõ.
- Có kết luận về khả năng mở thử/deploy.
- Không sửa lan sang phần không liên quan.

