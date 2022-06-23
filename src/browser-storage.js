const KEY = 'state';
const TTL = 36000;

export function loadState() {
  try {
    const now = new Date();
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    const item =  JSON.parse(serializedState);
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(KEY)
		return null
    }
    return item.state;
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state) {
  try {
    const now = new Date();
    const expiry = now.getTime() + TTL;
    const serializedState = JSON.stringify({state, expiry});
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}