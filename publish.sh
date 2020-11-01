npm run build
git add .
git commit -m "Release"
git push
ssh vadim@axelrod.co "cd ~/gutenberg; git pull; chmod -R +r *"
