# FrontSecure
**FrontSecure** is a JavaScript library to enhance the security of your web application's frontend by preventing access to DevTools, disabling text selection, blocking copy-paste, and more. It ensures a higher level of protection from common browser-based vulnerabilities and actions.

## Installation
You can install the library via npm:
```bash
npm install frontsecure
```
Alternatively, use the CDN version:
```html
<script src="https://cdn.jsdelivr.net/gh/ProfessorCodeDz/frontsecure/frontsecure.js"></script>
```
## Init
```js
    import FrontSecure from 'frontsecure';
    const secure = new FrontSecure();
```
## Features
- **Prevent DevTools Access**: Detects if DevTools is opened and redirects the user.
    ```js
    secure.devTools('https://example.com');
    ```
- **Disable Context Menu**: Disables right-click functionality.
    ```js
    secure.contextMenu();
    ```
- **Prevent Viewing Source Code**: Blocks the use of `Ctrl+U` and other shortcuts.
    ```js
    secure.viewSource();
    ```
- **Disable Text Selection**: Prevents users from selecting text.
    ```js
    secure.textSelect();
    ```
- **Block Copy, Cut, and Paste**: Disables copying, cutting, and pasting of content.
    ```js
    secure.copy();
    secure.paste();
    ```
- **Disable Drag & Drop**: Prevents dragging and dropping.
    ```js
    secure.dragDrop();
    ```
- **Prevent Print Screen**: Blocks print screen and `Ctrl+P`.
    ```js
    secure.printScreen();
    ```
- **Disable Save Page Locally**: Disables saving the page with `Ctrl+S`.
    ```js
    secure.savePage();
    ```
- **Domain-Specific Execution**: Ensures the page only runs on a specific domain.
    ```js
    secure.runLocally('https://your-domain.com', 'https://redirect.com');
    ```
- **Run All Features**:
    ```js
    secure.all('https://example.com', 'https://your-domain.com', 'https://example.com');
    ```    
