function redirectTo(page) {
            window.location.href = page;
        }
let currentReview = 0;
const reviews = document.querySelectorAll('.review-card');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

function previousReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
}

showReview(currentReview);
