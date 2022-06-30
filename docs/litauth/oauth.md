# OAuth
The LITauth OAuth implementation is very similar to Discord's.

LITauth follows the OAuth 2.0 protocol, im not gonna write docs that are any better so just look at [Discord](https://discord.com/developers/docs/topics/oauth2)'s ones.

### OAuth URLs
| URL | Method | Content Type | Parameters | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| /api/oauth2/token | POST | application/x-www-form-urlencoded | `grant_type`, `code` and `redirect_uri`.<br/>`client_id` and `client_secret` should be passed in as HTTP Basic authentication, however also supported in the request body | Provides an accessToken and refreshToken for a valid authentication code (obtained via `/oauth/authorize`)<br/>Tokens expire in 7 days, after which you must reauthorize or refresh token
| /api/oauth2/token | POST | application/x-www-form-urlencoded | `grant_type` and `refresh_token`.<br/>`client_id` and `client_secret` should be passed in as HTTP Basic authentication, however also supported in the request body | Provides a refreshed accessToken for a valid refresh token<br/>Tokens expire in 7 days, after which you must reauthorize or refresh token 
| /oauth/authorize | GET | url query you know | `client_id`, `redirect_uri`, `scope` (space seperated) and optionally, `state` | Redirect your user here to authorize your application |

### API URLs
All endpoints marked authorized require Bearer token in Authorization header.



| URL | Method | Authorized | Parameters | Scopes | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| /api/user | GET | yes | none | `identify` | Returns user information, without email |
| /api/user/email | GET | yes | none | `identify`, `email` | Returns user information with email |
| /api/avatar | POST | yes | `color` and `background` hex codes | `avatar` | Changes the user avatar, returns 200 OK if successful |
| /api/avatar/:userId | GET | no | :userId should be the id of the user | none | Returns the user avatar as SVG |
| /api/avatar/bg/:userId | GET | no | :userId should be the id of the user | none | Returns the user avatar as SVG with the background |
