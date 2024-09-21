/**
 * @class FrontSecure
 * @classdesc A library to secure various aspects of the frontend, including preventing access to DevTools, restricting text selection, preventing copying and pasting, and more.
 */
class FrontSecure{
    /**
     * Secures the browser's DevTools by redirecting the user if DevTools are opened.
     * It also prevents keyboard shortcuts related to DevTools like F12, Ctrl+Shift+I, and Ctrl+Shift+C.
     * 
     * @param {string} redirectUrl - The URL to redirect the user to when DevTools is detected.
     */
    devTools(redirectUrl){
        // devtools
        const devtools = { open: false, orientation: null };
        const threshold = 160;
        const detectDevTools = setInterval(() => {
            const widthDifference = window.outerWidth - window.innerWidth > threshold;
            const heightDifference = window.outerHeight - window.innerHeight > threshold;
            if (widthDifference || heightDifference) {
                if (!devtools.open) {
                    devtools.open = true; 
                    window.location.href = redirectUrl; 
                }
            } else {
                devtools.open = false; 
            }
        }, 1000);
        document.addEventListener('keydown', function(e) {
            // f12 
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // ctrl + shift + i
            if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
                e.preventDefault();
            }
            // ctrl + shift + c            
            if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
                e.preventDefault();
            }
        });
    }
    /**
     * Disables the context menu (right-click menu) to prevent users from accessing additional options.
     */
    contextMenu(){
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }
    /**
     * Prevents the user from viewing the page source by blocking Ctrl+U and similar key combinations.
     */
    viewSource(){
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
            }
        });
    }
    /**
     * Prevents text selection on the entire webpage by disabling user selection properties.
     */
    textSelect(){
        document.body.style.userSelect = 'none';
        document.body.style.msUserSelect = 'none';
        document.body.style.mozUserSelect = 'none';
    }
    /**
     * Disables the ability to copy or cut content from the webpage, including blocking keyboard shortcuts.
     */
    copy(){
        document.addEventListener('copy', e => e.preventDefault());
        document.addEventListener('cut', e => e.preventDefault());
                
        document.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'x' || event.key === 'C' || event.key === 'X')) {
                event.preventDefault();
            }
        });
    }
    /**
     * Disables the ability to paste content into the webpage by blocking the paste event and relevant keyboard shortcuts.
     */
    paste(){
        document.addEventListener('paste', e => e.preventDefault());
        document.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && (event.key === 'v' || event.key === 'V')) {
                event.preventDefault();
            }
        });
    }
    /**
     * Disables drag and drop functionality on the webpage by blocking dragstart and drop events.
     */
    dragDrop(){
        document.addEventListener('dragstart', e => e.preventDefault());
        document.addEventListener('drop', e => e.preventDefault());
    }
    /**
     * Prevents users from taking a screenshot or printing the screen by blocking keyboard shortcuts like Ctrl+P and PrintScreen.
     */
    printScreen(){
        document.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && (event.key === 'p' || event.key === 'P')) {
              event.preventDefault();
            }
            if (event.key === 'PrintScreen') {
              event.preventDefault();
            }
        });
    }
    /**
     * Disables the ability to save the webpage locally by blocking the Ctrl+S shortcut.
     */
    savePage(){
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
            }
        });
    }
    /**
     * Ensures that the page only runs when accessed from a specific domain or URL.
     * Redirects the user if the page is not loaded from the specified URL or is run locally.
     * 
     * @param {string} url - The allowed origin or URL where the page is permitted to run.
     * @param {string} redirectUrl - The URL to redirect the user to if they attempt to access the page locally or from an invalid source.
     */
    runLocally(url, redirectUrl){
        if (document.referrer === '' || window.location.origin !== url) {
            window.location.href = redirectUrl;
        } 
    }
    /**
     * Calls all security features at once.
     * @param {string} devtoolsRedirectUrl - The URL for redirecting if DevTools are opened.
     * @param {string} yourDomain - The allowed origin or URL for running the page.
     * @param {string} runLocallyRedirectUrl - The URL to redirect if accessed from an invalid source.
     */
    all(devtoolsRedirectUrl, yourDomain, runLocallyRedirectUrl) {
        this.devTools(devtoolsRedirectUrl);
        this.contextMenu();
        this.viewSource();
        this.textSelect();
        this.copy();
        this.paste();
        this.dragDrop();
        this.printScreen();
        this.savePage();
        this.runLocally(yourDomain, runLocallyRedirectUrl);
    }
}
