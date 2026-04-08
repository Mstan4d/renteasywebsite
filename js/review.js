// Review Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter Reviews
    const filterButtons = document.querySelectorAll('.filter-btn');
    const reviewCards = document.querySelectorAll('.review-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide cards based on filter
            reviewCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Star Rating System
    const stars = document.querySelectorAll('.star-rating i');
    const ratingText = document.querySelector('.rating-text');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Update stars
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
            
            // Update rating text
            const ratingTexts = [
                'Poor',
                'Fair',
                'Good',
                'Very Good',
                'Excellent'
            ];
            ratingText.textContent = ratingTexts[rating - 1];
        });
    });
    
    // Review Form Submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                role: this.querySelector('select').value,
                review: this.querySelector('textarea').value,
                rating: this.querySelectorAll('.star-rating i.fas').length
            };
            
            // Simple validation
            if (!formData.name || !formData.role || !formData.review || formData.rating === 0) {
                alert('Please fill all fields and select a rating.');
                return;
            }
            
            // In production, you would send this to your backend
            // For now, we'll show a success message
            const roleNames = {
                tenant: 'Tenant',
                landlord: 'Landlord',
                manager: 'Manager',
                estate: 'Estate Firm'
            };
            
            // Create new review card (simulated)
            const newReview = document.createElement('div');
            newReview.className = 'review-card';
            newReview.setAttribute('data-category', formData.role);
            newReview.innerHTML = `
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar ${formData.role}">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <h4>${formData.name}</h4>
                            <span class="reviewer-role">${roleNames[formData.role]} - New</span>
                        </div>
                    </div>
                    <div class="review-rating">
                        ${Array(5).fill().map((_, i) => 
                            `<i class="${i < formData.rating ? 'fas' : 'far'} fa-star"></i>`
                        ).join('')}
                        <span>${formData.rating}.0</span>
                    </div>
                </div>
                <div class="review-content">
                    <p>"${formData.review}"</p>
                </div>
                <div class="review-meta">
                    <span><i class="fas fa-clock"></i> Just now</span>
                    <span><i class="fas fa-paper-plane"></i> Pending approval</span>
                </div>
                <div class="verified-badge">
                    <i class="fas fa-clock"></i> Pending
                </div>
            `;
            
            // Add to the grid
            document.querySelector('.reviews-grid').prepend(newReview);
            
            // Reset form
            reviewForm.reset();
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            ratingText.textContent = 'Select your rating';
            
            // Show success message
            alert('Thank you for your review! It will appear after approval.');
        });
    }
});