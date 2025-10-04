// LinkTree Configuration
const linkTreeConfig = {
    // Club Information
    clubName: "Iranian Club at De Anza",
    bio: "Connecting Iranian students at De Anza College",
    memberCount: "150+",
    eventCount: "12",
    
    // Links Configuration
    links: [
        {
            id: "instagram",
            title: "Instagram",
            description: "Follow us for updates and photos",
            url: "https://www.instagram.com/deanza.isa?igsh=NTc4MTIwNjQ2YQ==",
            icon: "fab fa-instagram",
            platform: "instagram"
        },
        {
            id: "telegram",
            title: "Telegram",
            description: "Join our Telegram group chat",
            url: "https://t.me/+5YbvftT2BJY0YWQx",
            icon: "fab fa-telegram",
            platform: "telegram"
        },
        {
            id: "discord",
            title: "Discord",
            description: "Connect with us on Discord",
            url: "https://discord.gg/4RXC6GnF",
            icon: "fab fa-discord",
            platform: "discord"
        }
    ]
};

// DOM Elements
const linksContainer = document.getElementById('links-container');
const memberCountElement = document.getElementById('member-count');
const eventCountElement = document.getElementById('event-count');

// Initialize the LinkTree
function initLinkTree() {
    updateStats();
    renderLinks();
    addEventListeners();
}

// Update statistics
function updateStats() {
    if (memberCountElement) {
        memberCountElement.textContent = linkTreeConfig.memberCount;
    }
    if (eventCountElement) {
        eventCountElement.textContent = linkTreeConfig.eventCount;
    }
}

// Render all links
function renderLinks() {
    linksContainer.innerHTML = '';
    
    linkTreeConfig.links.forEach((link, index) => {
        const linkElement = createLinkElement(link, index);
        linksContainer.appendChild(linkElement);
    });
}

// Create a single link element
function createLinkElement(link, index) {
    const linkDiv = document.createElement('a');
    linkDiv.href = link.url;
    linkDiv.target = '_blank';
    linkDiv.rel = 'noopener noreferrer';
    linkDiv.className = 'link-item';
    linkDiv.style.animationDelay = `${index * 0.1}s`;
    
    linkDiv.innerHTML = `
        <div class="link-content">
            <div class="link-icon ${link.platform}">
                <i class="${link.icon}"></i>
            </div>
            <div class="link-text">
                <div class="link-title">${link.title}</div>
                <div class="link-description">${link.description}</div>
            </div>
            <div class="link-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `;
    
    // Add click tracking
    linkDiv.addEventListener('click', () => {
        trackLinkClick(link.id);
    });
    
    return linkDiv;
}

// Track link clicks (you can integrate with analytics)
function trackLinkClick(linkId) {
    console.log(`Link clicked: ${linkId}`);
    // Add analytics tracking here if needed
    // Example: gtag('event', 'click', { link_id: linkId });
}

// Add new link function (for easy management)
function addLink(linkData) {
    // Validate link data
    if (!linkData.title || !linkData.url) {
        console.error('Link must have title and url');
        return false;
    }
    
    // Add default values if not provided
    const newLink = {
        id: linkData.id || linkData.title.toLowerCase().replace(/\s+/g, '_'),
        title: linkData.title,
        description: linkData.description || 'Visit our page',
        url: linkData.url,
        icon: linkData.icon || 'fas fa-link',
        platform: linkData.platform || 'website'
    };
    
    // Add to configuration
    linkTreeConfig.links.push(newLink);
    
    // Re-render links
    renderLinks();
    
    return true;
}

// Remove link function
function removeLink(linkId) {
    const linkIndex = linkTreeConfig.links.findIndex(link => link.id === linkId);
    if (linkIndex !== -1) {
        linkTreeConfig.links.splice(linkIndex, 1);
        renderLinks();
        return true;
    }
    return false;
}

// Update link function
function updateLink(linkId, newData) {
    const link = linkTreeConfig.links.find(link => link.id === linkId);
    if (link) {
        Object.assign(link, newData);
        renderLinks();
        return true;
    }
    return false;
}

// Add event listeners
function addEventListeners() {
    // Add any additional event listeners here
    document.addEventListener('DOMContentLoaded', () => {
        // Add loading animation
        setTimeout(() => {
            document.querySelectorAll('.link-item').forEach((item, index) => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        }, 100);
    });
}

// Utility function to get platform icon
function getPlatformIcon(platform) {
    const icons = {
        instagram: 'fab fa-instagram',
        telegram: 'fab fa-telegram',
        discord: 'fab fa-discord',
        facebook: 'fab fa-facebook',
        twitter: 'fab fa-twitter',
        youtube: 'fab fa-youtube',
        linkedin: 'fab fa-linkedin',
        website: 'fas fa-globe',
        email: 'fas fa-envelope',
        phone: 'fas fa-phone'
    };
    return icons[platform] || 'fas fa-link';
}

// Export functions for external use (if needed)
window.LinkTreeManager = {
    addLink,
    removeLink,
    updateLink,
    getConfig: () => linkTreeConfig
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLinkTree);

// Example usage for adding new links:
/*
// Add a new link
LinkTreeManager.addLink({
    title: "Facebook",
    description: "Like our Facebook page",
    url: "https://facebook.com/iranianclubdeanza",
    platform: "facebook"
});

// Update an existing link
LinkTreeManager.updateLink("instagram", {
    url: "https://instagram.com/new_handle"
});

// Remove a link
LinkTreeManager.removeLink("discord");
*/


// === THEME: default to system, allow manual override with icon toggle ===
(function(){
    const btn = document.getElementById('theme-toggle');
  
    function systemPrefersDark(){
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  
    function setButton(mode){
        // mode: auto | dark | light
        btn.dataset.mode = mode;
        const labelMap = {
          auto:  'Auto (system)',
          dark:  'Dark',
          light: 'Light'
        };
        btn.setAttribute('aria-label', 'Toggle theme — ' + labelMap[mode]);
        btn.setAttribute('title', labelMap[mode]);
        btn.setAttribute('data-tip', labelMap[mode]); // <-- tooltip text
      }
      
  
    function apply(mode){ // 'auto' | 'dark' | 'light'
      if(mode === 'dark'){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        setButton('dark');
      }else if(mode === 'light'){
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        setButton('light');
      }else{
        // auto -> remove override; follow system
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        setButton('auto');
      }
    }
  
    // init (default to system/auto)
    const saved = localStorage.getItem('theme');
    apply(saved === 'dark' || saved === 'light' ? saved : 'auto');
  
    // sync when OS theme changes and we’re in Auto
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      if(!localStorage.getItem('theme')) apply('auto');
    });
  
    // cycle: Auto → Dark → Light → Auto
    btn.addEventListener('click', () => {
      const saved = localStorage.getItem('theme'); // null | 'dark' | 'light'
      if(!saved) apply('dark');
      else if(saved === 'dark') apply('light');
      else apply('auto');
    });
  })();
  
  