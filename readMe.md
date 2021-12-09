# Keycloak token validation principle
- algorithm: RS256
- signature: keycloak public key
- Validate the ID token claims:
    1. issuer: http://localhost:8080/auth/realms/demo (keycloak issuer)
    2. audience: demoapp(client_id)
    3. timestamps: default jwt.verify() will verify the timestamps


# How to find Keycloak public key
1. find issuer from openid-configuration, i.e. http://localhost:8080/auth/realms/demo/.well-known/openid-configuration
2. find public_key from issuer, i.e. http://localhost:8080/auth/realms/demo
3. save public_key as cert.pem
-----BEGIN PUBLIC KEY-----
<public key>
-----END PUBLIC KEY-----

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvZp2nUh7VdihEQh6C2aw84dkq2/otKYX89wCNq0t96jHsIXy/igC1s2mBBhB+tYF9TeqzDsxMY/SuQ1t+JTKlSrT3bLYqXX0ZWe3kJ5Jn+3Kfu52tjc0V1uDX6QGKJ+YdIgOEJfwSshYl8IuetqQ/TjAJ8+Mt0ECyVdpEUvMf3uDMOnTbYz9nUUCYc2ZGcfgQcLmD4J47jY5LTPzg8PEDDbjHIxqJd4Q5k5Ij3SihM+iBAfQrjEH1Bs0EEsQzowleApqOLmouBm9pFMQGjH+MfAd1heXmvTcASDmuj3BsuKAfqcknfCUrMYPxlMepJy8t9mJtGGanoPm3W9OD6fCcwIDAQAB
-----END PUBLIC KEY-----
```

reference: https://connect2id.com/blog/how-to-validate-an-openid-connect-id-token