/*
// Supabase configuration
  const SUPABASE_URL= 'https://uxkybljoxtxnsnsrblfu.supabase.co;'
  const SUPABASE_ANON_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4a3libGpveHR4bnNuc3JibGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NTIxNDQsImV4cCI6MjA4NTQyODE0NH0.6PxDCYIMzmUwqxZlRzfSBC1v_1cgutSupUIzaD2E5EE;'
  const EDGE_FUNCTION_URL = 'https://your-project.supabase.co/functions/v1/get-location';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Waitlist table must exist: CREATE TABLE waitlist (id SERIAL PRIMARY KEY, email TEXT UNIQUE, name TEXT, created_at TIMESTAMP DEFAULT NOW());

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            answer.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (answer.classList.contains('active')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });

    // Hero "Find Now" button: show a friendly message to download app
    const findBtn = document.getElementById('heroFindBtn');
    if (findBtn) {
        findBtn.addEventListener('click', () => {
            alert('🔍 To search real listings, please download the RentEasy app using the buttons below.');
        });
    }

    // Download buttons (dummy links – replace with actual APK/PWA URLs later)
    const apkBtns = document.querySelectorAll('#downloadApkBtn, #downloadApkBottom');
    const pwaBtns = document.querySelectorAll('#pwaBtn, #pwaBottom');
    apkBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('📱 APK download will be available soon. Join waitlist to get notified!');
        });
    });
    pwaBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🌐 PWA version coming. Stay tuned!');
        });
    });

    // Waitlist form submission
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('waitlistEmail').value.trim();
            const name = document.getElementById('waitlistName').value.trim();
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            const submitBtn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            try {
                const { error } = await supabase
                    .from('waitlist')
                    .insert([{ email, name: name || null }]);
                if (error) throw error;
                alert('✅ You\'re on the list! We\'ll notify you when RentEasy launches.');
                waitlistForm.reset();
            } catch (err) {
                console.error(err);
                if (err.message.includes('duplicate')) {
                    alert('This email is already on the waitlist.');
                } else {
                    alert('Error: ' + err.message);
                }
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
*/