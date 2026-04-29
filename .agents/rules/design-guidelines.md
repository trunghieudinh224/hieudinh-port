# Design Guidelines

## Định Hướng

Giữ phong cách hiện tại của React portfolio: hiện đại, sáng, gọn, có animation nhẹ, phù hợp developer portfolio.

## Nên Giữ

- Font Inter.
- Blue là màu CTA chính.
- Slate/white là nền và text.
- Navbar fixed.
- Card project có ảnh, tag, hover state.
- Section spacing rộng.
- Scroll reveal khi nội dung vào viewport.
- Mobile menu gọn và rõ.

## Nên Tránh

- Redesign quá mạnh khi task chỉ là convert.
- Làm trang quá nhiều gradient/orb trang trí.
- Dùng quá nhiều màu khác nhau.
- Tạo UI phức tạp hơn bản React gốc.
- Tạo card lồng nhau quá nhiều tầng.
- Để text tràn khỏi button/card trên mobile.

## Responsive

- Mobile là 1 cột.
- Desktop có thể dùng 2 cột cho hero/about và 3 cột cho project/skills.
- Ảnh cần có kích thước/tỷ lệ ổn định.
- Navbar mobile phải dễ bấm.

## Animation

Animation nên ngắn, mềm và phục vụ trải nghiệm:

- Reveal khi scroll: opacity + translate.
- Hover card: shadow + translate nhẹ.
- Hero image: float nhẹ.
- Mobile menu: slide/fade nhẹ.

Không thêm animation làm chậm trang hoặc gây rối nếu không cần.

