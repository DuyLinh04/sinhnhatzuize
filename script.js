function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hiển thị hiệu ứng loading
    document.querySelector('.siben').style.display = 'flex';

    // Giả lập quá trình đăng nhập với thời gian 5 giây
    setTimeout(() => {
        if (username === '0981423922' && password === '11-10-2003') {
            document.getElementById('message').innerText = 'Login successful!';
            // Chuyển hướng đến trang HappyBirthday.html sau khi đăng nhập thành công
            window.location.href = 'Hello.html';
        } else {
            document.getElementById('message').innerText = 'Invalid phone number or date of birth';
        }
        // Ẩn hiệu ứng loading sau khi đăng nhập xong
        document.querySelector('.siben').style.display = 'none';
    }, 5000); // Thời gian giả lập quá trình đăng nhập là 5000 milliseconds (5 giây)
}


// Pet animation logic
const pet = document.getElementById('pet');
let direction = 1;
let petPosition = 0;

function movePet() {
    const containerWidth = pet.parentElement.offsetWidth - pet.offsetWidth;
    
    petPosition += 1 * direction;

    if (petPosition >= containerWidth || petPosition <= 0) {
        direction *= -1;
        pet.style.transform = `scaleX(${direction})`; // Lật hướng khi đổi chiều
    }

    pet.style.left = `${petPosition}px`;
    requestAnimationFrame(movePet);
}

document.addEventListener('DOMContentLoaded', () => {
    movePet();
});
