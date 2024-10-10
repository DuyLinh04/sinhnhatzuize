function makeAWish() {
  const wishImage = document.getElementById("wishImage");
  const wishNote = document.getElementById("wishNote");

  // Hiển thị hình ảnh trong 5 giây
  wishImage.style.display = "block";
  setTimeout(() => {
      wishImage.style.display = "none";
      // Hiển thị tờ giấy để viết điều ước sau 5 giây
      wishNote.style.display = "block";
  }, 5000);

  // Ẩn nút "Hãy ước một điều" ngay khi được nhấn
  document.querySelector(".wish-button").style.display = "none";
}

function submitWish() {
  const wishText = document.querySelector(".wish-note textarea").value;
  if (wishText) {
      document.querySelector(".container").style.display = "none";
      
      const wishMessageDiv = document.getElementById("wishMessage");
      wishMessageDiv.textContent = "Chúc bạn luôn hạnh phúc!";
      wishMessageDiv.classList.add("show");
      wishMessageDiv.style.display = "flex";
      
      const iframeContainer = document.getElementById("iframeContainer");
      iframeContainer.style.display = "flex"; // Hiển thị iframe toàn màn hình
      iframeContainer.style.width = "100%";
      iframeContainer.style.height = "100%";
  } else {
      createWishMessage("Hãy nhập điều ước của bạn trước khi gửi!", true);
  }
}



function createWishMessage(message, isError = false) {
  // Tạo phần tử chứa thông báo
  const messageDiv = document.createElement("div");
  messageDiv.className = "wish-message";
  messageDiv.textContent = isError
      ? message
      : `Điều ước của bạn: "${message}" đã được gửi lên trời!`;

  // Thêm hiệu ứng bay lên và biến mất
  document.body.appendChild(messageDiv);
  setTimeout(() => {
      messageDiv.style.transform = "translateY(-200px)";
      messageDiv.style.opacity = "0";
  }, 1000);

  // Xóa thông báo sau khi hiệu ứng kết thúc
  messageDiv.addEventListener("transitionend", () => {
      messageDiv.remove();
  });
}

// Tự động phát nhạc nền khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  const song = document.getElementById("birthdaySong");
  song.play();

  // Đảm bảo nhạc sẽ được phát lại nếu người dùng tương tác với trang
  document.body.addEventListener("click", () => {
      if (song.paused) {
          song.play();
      }
  });
});
