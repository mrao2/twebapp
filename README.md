## Meetup Test

To run the server : 'npm run server'
To run the client : 'npm start'
there is a single command with nodemon: 'npm run dev' however it doesnt work for me

This uses Passport.js to authenticate and it set up in way that requires little config to get going
All you have to do is add the Meetup clientID and Secret to the config/index.js file. If you look in server/index.js there are other authentication pathways (this project was copied from a personal api tester) and to configure them, all you need to do is add the id and secret from the corresponding website to the config/index.js file and you should be good to go. 

This is not functional yet. Please check the issues page to help out. 



