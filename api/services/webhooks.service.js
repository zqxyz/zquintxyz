// import { spawn } from 'child_process';

exports.deploy = (req, res) => {
    console.log("deploy goes here");
    res.status(200).send('Deploying...');
};
// const sh = spawn('bash', [path.join(__dirname, 'build.sh')].concat(args), {
//     stdio: 'inherit',
// });

// sh.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// sh.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// sh.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });
// };
