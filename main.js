const SUPABASE_URL = 'https://kmbtiftykqscnrzerbaz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYnRpZnR5a3FzY25yemVyYmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMDMwMjQsImV4cCI6MjA4MTU3OTAyNH0.TbDEqGCy9wqbg24ZskT3z1r5GbVb2XPlAzEdLEKe_qQ';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
