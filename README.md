# 🍕 PizzaWizza - Ad-Free Game Hub

Welcome to **PizzaWizza**, your go-to platform for **ad-free**, **unblocked**, and **completely free** gaming on your Chromebook or any browser!

## Features

✅ **100% Ad-Free** - No advertisements or pop-ups  
✅ **Unblocked** - Works in schools and restricted networks  
✅ **Free Forever** - No payments, no premium tiers  
✅ **Chromebook Friendly** - Pure HTML/CSS/JavaScript  
✅ **Fast & Lightweight** - Minimal loading times  
✅ **Responsive Design** - Works on any device

## Games Available

### Minecraft
- Minecraft 1.26  
- Minecraft 1.21  
- Minecraft 1.8

### Horror Games
- Poppy Playtime 1, 2, 3, 4  
- General Horror Games Collection

### Action Games
- Hobo 1, 2, 3, 4, 5, 6  
- Gun Games Collection

### Puzzle Games
- 0v0 - Challenging Puzzle Platformer

## Getting Started

### For Players
1. Visit the website in your browser  
2. Click on any game to view details  
3. Click "Play Now" when available  
4. Enjoy gaming!

### For Developers (Setting Up Locally)

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/phoenixjanthony-collab/pizzawizza.git  
   cd pizzawizza
   ```

2. **Open in browser:**  
   - Simply open `index.html` in your web browser  
   - Or use a local server:  
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## File Structure

```
pizzawizza/
├── index.html          # Main homepage
├── style.css           # Styling
├── script.js           # Main functionality
├── games.js            # Game database
├── games/              # Game files directory
│   ├── minecraft/
│   ├── poppy-playtime/
│   ├── hobo/
│   └── ...
└── README.md          # This file
```

## Adding New Games

To add a new game:

1. Create a folder in the `games/` directory
2. Add game files (HTML, CSS, JS, etc.)
3. Update `games.js` with game information
4. Update `index.html` navigation if needed

### Example: Adding a Game to games.js

```javascript
{
    id: 'my-game',
    name: 'My Game',
    category: 'action',
    description: 'Description of my game',
    emoji: '🎮',
    status: 'available', // or 'coming-soon'
    link: 'games/my-game/index.html'
}
```

## Hosting on GitHub Pages

To host this site for free on GitHub Pages:

1. Go to repository settings
2. Scroll to "GitHub Pages"
3. Select `main` branch as source
4. Your site will be live at: `https://phoenixjanthony-collab.github.io/pizzawizza`

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and responsive design
- **JavaScript (Vanilla)** - Functionality
- **No external dependencies** - Pure web technologies

## Browser Support

- ✅ Chrome/Chromium (Chromebooks)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Any modern browser

## Contributing

Want to contribute? Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-new-game`)
3. Add your game following the structure
4. Test it thoroughly
5. Submit a pull request

## Issues & Suggestions

Found a bug or have a suggestion? [Open an issue](https://github.com/phoenixjanthony-collab/pizzawizza/issues)

## License

This project is open source and available under the MIT License.

## Disclaimer

- This is an educational/entertainment project
- Games are provided as-is
- Respect copyright and intellectual property rights
- Use responsibly in school environments

---

**Made with 🍕 and ❤️ for gamers everywhere!**

Happy Gaming! 🎮