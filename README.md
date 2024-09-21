# FrontSecure
**FrontSecure** is a JavaScript library to enhance the security of your web application's frontend by preventing access to DevTools, disabling text selection, blocking copy-paste, and more. It ensures a higher level of protection from common browser-based vulnerabilities and actions.

## Installation
You can install the library via npm:
```bash
npm install frontsecure
```
Alternatively, use the CDN version:
```bash
<script src="https://cdn.jsdelivr.net/npm/frontsecure@latest"></script>
```

## Features
- **Prevent DevTools Access**: Detects if DevTools is opened and redirects the user.
    ```javascript
    secure.devTools('https://example.com');
    ```
- **Disable Context Menu**: Disables right-click functionality.
    ```javascript
    secure.contextMenu();
    ```
- **Prevent Viewing Source Code**: Blocks the use of `Ctrl+U` and other shortcuts.
    ```javascript
    secure.viewSource();
    ```
- **Disable Text Selection**: Prevents users from selecting text.
    ```javascript
    secure.textSelect();
    ```
- **Block Copy, Cut, and Paste**: Disables copying, cutting, and pasting of content.
    ```javascript
    secure.copy();
    secure.paste();
    ```
- **Disable Drag & Drop**: Prevents dragging and dropping.
    ```javascript
    secure.dragDrop();
    ```
- **Prevent Print Screen**: Blocks print screen and `Ctrl+P`.
    ```javascript
    secure.printScreen();
    ```
- **Disable Save Page Locally**: Disables saving the page with `Ctrl+S`.
    ```javascript
    secure.savePage();
    ```
- **Domain-Specific Execution**: Ensures the page only runs on a specific domain.
    ```javascript
    secure.runLocally('https://your-domain.com', 'https://redirect.com');
    ```
- **Run All Features**:
    ```javascript
    secure.all('https://example.com', 'https://your-domain.com', 'https://example.com');
    ```    
