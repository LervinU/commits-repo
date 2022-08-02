import fetch from 'node-fetch';

export const getCommits = async(req, res) => {
    try {
        const URL = "https://api.github.com/repos/LervinU/repo-commits/commits";
        const response = await fetch(URL);
        const commits = await response.json();
        const resData = [];
        let commitObj = {};
        commits.forEach(commit => {
            commitObj.sha = commit.sha
            commitObj.message = commit.commit.message
            commitObj.author = commit.commit.author
            resData.push(commitObj);
        });
        
        res.json(resData);

    } catch (e) {
        console.error(`getCommits: ${e}`);
    }

}