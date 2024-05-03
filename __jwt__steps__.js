/**
 * install jsonwebtoken ($ npm install jsonwebtoken)
 * jwt.sign(payload, secret, {expiresIn: })
 * token to client
 *
 */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. localStorage --> ok type (XSS)
 * 3. cookies: http only
 *
 */

/**
 * 1. set cookies with http only. for development secure: false, (for production secure: true)
 * 
 * 2. cors
 * app.use(
    cors({
        origin: ["http://localhost:5173/"],
        credentials: true,
    }),
)
 * 
 * 3. set on client side by axios settings
 * in axios set withCredentials: true 
 * 
*/


/**
 * 1. to send cookies from the clients make sure you added withCredentials: true for the api call using axios
 * 2. use cookie parser as middleware
*/