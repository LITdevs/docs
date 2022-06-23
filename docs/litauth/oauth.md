# OAuth
The LITauth OAuth implementation is very similar to Discord's.

LITauth does not support refresh tokens, or state.

LITauth follows the OAuth 2.0 protocol, im not gonna write docs that are any better so just look at [Discord](https://discord.com/developers/docs/topics/oauth2)'s ones. The only quirk of LITauth's implementation is the lack of a refreshToken.

### OAuth URLs
| URL | Method | Content Type | Parameters | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| /api/oauth2/token | POST | application/x-www-form-urlencoded | `grant_type`, `code` and `redirect_uri`.<br/>`client_id` and `client_secret` should be passed in as HTTP Basic authentication, however also supported in the request body | Provides a accessToken for a valid authentication code (obtained via `/oauth/authorize`)<br/>Tokens expire in 7 days, after which you must reauthorize.
| /oauth/authorize | GET | url query you know | `client_id`, `redirect_uri`, `scope` (space seperated) | Redirect your user here to authorize your application |

### API URLs
All endpoints marked authorized require Bearer token in Authorization header.
| URL | Method | Authorized | Parameters | Scopes | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| /api/user | GET | yes | none | `identify` | Returns user information, without email |
| /api/user/email | GET | yes | none | `identify`, `email` | Returns user information with email |
| /api/avatar | POST | yes | `color` and `background` hex codes | `avatar` | Changes the user avatar, returns 200 OK if successful |
| /api/avatar/:userId | GET | no | :userId should be the id of the user | none | Returns the user avatar as SVG |