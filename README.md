# Iranian Club at De Anza - LinkTree

A modern, responsive LinkTree page for the Iranian Club at De Anza College.

## Features

- 🎨 Modern, responsive design with Persian/Iranian color scheme
- 📱 Mobile-friendly interface
- 🔗 Easy link management system
- ⚡ Fast loading with smooth animations
- 🎯 Click tracking capabilities
- 🔧 Easy to customize and extend

## Files Structure

```
LinkTree/
├── index.html          # Main HTML file
├── style.css          # CSS styles and responsive design
├── script.js          # JavaScript functionality and link management
└── README.md          # This file
```

## Current Links

The LinkTree currently includes:
- **Instagram** - Follow us for updates and photos
- **Telegram** - Join our Telegram group chat  
- **Discord** - Connect with us on Discord

## How to Add New Links

### Method 1: Edit the JavaScript file (Recommended)

1. Open `script.js`
2. Find the `linkTreeConfig` object
3. Add a new link object to the `links` array:

```javascript
{
    id: "facebook",
    title: "Facebook",
    description: "Like our Facebook page",
    url: "https://facebook.com/iranianclubdeanza",
    icon: "fab fa-facebook",
    platform: "facebook"
}
```

### Method 2: Use the JavaScript API

You can also add links dynamically using the browser console or by adding JavaScript code:

```javascript
// Add a new link
LinkTreeManager.addLink({
    title: "YouTube",
    description: "Subscribe to our channel",
    url: "https://youtube.com/@iranianclubdeanza",
    platform: "youtube"
});

// Update an existing link
LinkTreeManager.updateLink("instagram", {
    url: "https://instagram.com/new_handle"
});

// Remove a link
LinkTreeManager.removeLink("discord");
```

## Supported Platforms

The LinkTree supports these platforms with custom styling:
- Instagram
- Telegram
- Discord
- Facebook
- Twitter
- YouTube
- LinkedIn
- Website (generic)

## Customization

### Changing Colors
Edit the CSS variables in `style.css`:
- Background gradient: Lines 12-13
- Primary color: `#1e3a8a` (used throughout)
- Platform-specific colors: Lines 150-180

### Updating Club Information
Edit the `linkTreeConfig` object in `script.js`:
- `clubName`: Club name
- `bio`: Description
- `memberCount`: Number of members
- `eventCount`: Number of events

### Adding Custom Icons
1. Include the icon font (Font Awesome is already included)
2. Use the icon class in the link configuration
3. Add custom CSS styling if needed

## Deployment

### Local Testing
1. Open `index.html` in a web browser
2. All files should be in the same directory

### Web Hosting
1. Upload all files to your web server
2. Ensure all files are in the same directory
3. Access via your domain name

### GitHub Pages (Free Option)
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your LinkTree will be available at `https://yourusername.github.io/repositoryname`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight design (< 50KB total)
- Fast loading times
- Smooth animations
- Responsive images

## Security

- All external links open in new tabs
- `rel="noopener noreferrer"` for security
- No external dependencies except CDN fonts/icons

## Support

For questions or issues:
1. Check this README first
2. Review the code comments in `script.js`
3. Test in different browsers
4. Check browser console for errors

## Future Enhancements

Potential features to add:
- Analytics integration (Google Analytics)
- Link click tracking
- Admin panel for link management
- Custom themes
- Multi-language support
- QR code generation

---

**Created for Iranian Club at De Anza College**  
*Connecting Iranian students through technology*
