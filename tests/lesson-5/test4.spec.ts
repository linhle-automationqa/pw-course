import { test } from '@playwright/test';

test('Exercise 4: Add notes', async ({ page }) => {
    const notes = [
        { title: "Robot hình người của Elon Musk đang 'tiến hóa' thế nào?", content: "Optimus, robot hình người được Elon Musk, kỳ vọng chiếm 80% giá trị tương lai của Tesla, đang chưa đạt tiến bộ như mong đợi." },
        { title: "Cơ chế chống lão hóa và ung thư của loài chuột dũi", content: "Chuột dũi trụi lông sở hữu những cơ chế độc đáo cho phép chúng chống lại quá trình lão hóa và đẩy lùi bệnh tật như ung thư." },
        { title: "Tượng 'cha đẻ' Bitcoin Satoshi xuất hiện ở Hà Nội", content: "Bức tượng Satoshi Nakamoto, người tạo ra Bitcoin, được đưa về đặt tại Hà Nội và mở cửa tham quan chiều 9/9." },
        { title: "Công nghệ thu nước uống trên sa mạc bị chê đắt", content: "MỹMột số chuyên gia cho rằng thiết bị thu nước từ không khí trên sa mạc có chi phí quá cao nhưng sản xuất lượng nước chỉ được 2/3 cốc/ngày." },
        { title: "Thanh toán 10 triệu đồng/tháng sở hữu căn hộ mặt tiền quốc lộ 13", content: "Coteccons mở bán giỏ hàng giới hạn, 3 mặt hướng sông - 3 mặt tiền đường, hoàn tiền lên đến 22%." },
        { title: "Giải pháp máy chủ ảo cho chuyển đổi số của HostingViet", content: "Công ty Cổ phần công nghệ số Thiên Quang (HostingViet) cung cấp các dịch vụ VPS ..." },
        { title: "GAM Esports mong đối đầu CFO tại chung kết LCP 2025", content: "GAM Esports khẳng định mục tiêu lớn nhất ở mùa giải LCP đầu tiên là giành vô địch ..." },
        { title: "VNPT đề xuất phát triển ba sản phẩm công nghệ chiến lược về AI", content: "VNPT đề xuất với Chính phủ tham gia ba dự án AI có tầm ảnh hưởng quốc gia, nhằm ..." },
        { title: "Sản phẩm công nghệ chiến lược năm 2025 phải có tính cạnh tranh", content: "Phó thủ tướng Nguyễn Chí Dũng nhấn mạnh sản phẩm công nghệ chiến lược năm 2025 phải làm được ngay, tạo đột phá và có khả năng cạnh tranh trong nước, quốc tế." },
        { title: "Việt Nam công bố 11 nhóm công nghệ chiến lược", content: "Thủ tướng ban hành danh mục gồm 11 nhóm công nghệ, 35 nhóm sản phẩm chiến lược như AI, chip bán dẫn, Blockchain, robot, nhằm thúc đẩy phát triển các ngành mũi nhọn." }
    ];

    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click on Product Page", async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (const note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        }
    })

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì", async () => {
        await page.locator("//input[@id='search']").fill("AI");
    })
})