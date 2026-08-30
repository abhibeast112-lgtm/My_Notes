
// --- Quote of the day ---
// TODO: eventually pull this from an API. For now, rotate a small local list
// so the page feels alive without needing a backend yet.
const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Small daily improvements are the key to staggering long-term results.", author: "Anonymous" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Anonymous" },
];
 
function setDailyQuote() {
  const dayIndex = new Date().getDate() % quotes.length;
  const quote = quotes[dayIndex];
  document.getElementById("quoteText").textContent = quote.text;
  document.getElementById("quoteAuthor").textContent = `— ${quote.author}`;
}
 
setDailyQuote();
 
// --- Sidebar navigation ---
// For now this just toggles the "active" state visually.
// Later, each section will load its own content (tasks, notes, uploads, etc).
const navItems = document.querySelectorAll(".nav-item");
 
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
 
    const section = item.dataset.section;
    console.log(`Switched to section: ${section}`);
    // TODO: render the actual section content here once pages/components exist
  });
});
 
// --- Top bar buttons (placeholders until Supabase auth is wired in) ---
document.getElementById("settingsBtn").addEventListener("click", () => {
  console.log("Open settings (not built yet)");
});
 
document.getElementById("logoutBtn").addEventListener("click", () => {
  console.log("Log out (not wired to Supabase yet)");
});
 
document.getElementById("signupBtn").addEventListener("click", () => {
  console.log("Open sign up (not wired to Supabase yet)");
});
 
