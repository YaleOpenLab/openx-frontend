# Run this using Jenkins / similar CI tools
git pull origin master
npm run build
pm2 restart all
