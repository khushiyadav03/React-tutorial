# 04 Background Changer - Short Overview

## Kya implement kiya
- Random color generator app.
- Background color state se update hota hai.
- Color code copy button add kiya.
- Last selected color `localStorage` me save kiya.

## Kya sikha
- Custom hook `useColor` logic ko component se separate rakhta hai.
- `useState` UI changing values ke liye use hota hai.
- `useEffect` side effects ke liye use hota hai, jaise localStorage update.
- Props se parent state/functions child component tak pass kar sakte hain.
- Clipboard API async operation hoti hai.
