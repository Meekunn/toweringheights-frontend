## Contributing Guidelines:

We welcome all contributions to the Open Science Community in Saudi Arabia. The contribution can be a [issue report](https://github.com/balotofi/toweringheights-frontend/issues) or a [pull request](https://github.com/balotofi/toweringheights-frontend/pulls).

### Contribution procedure

1. Check if there is already an [issue](https://github.com/balotofi/toweringheights-frontend/issues) about your idea to avoid duplicates issues. If there isn't, create one and asked to be assigned to it.
2. Fork the [toweringheights-frontend](https://github.com/balotofi/toweringheights-frontend) to your Github account.
3. Clone the forked repository on your local machine.
   ```
    git clone https://github.com/<your-github-username>/toweringheights-frontend.git
   ```
4. Sync the forked repository, to avoid merge conflicts.
   ```
   git remote add upstream https://github.com/balotofi/toweringheights-frontend.git
   git fetch upstream
   git pull upstream main
   git push
   ```
5. Create a new branch
   ```
    git checkout -b newbranch
   ```
6. Make necessary changes or/and additions within your forked repository.
7. Add and Commit your Changes
   ```
   git add .
   git commit -m 'Add Something Cool'
   ```
8. Push commits to the forked repository
   ```
    git push origin newbranch
   ```
9. Submit a Pull Request against the `develop` branch and wait for the code to be reviewed and merged.
