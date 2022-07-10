# Lemon Drop

## A first fresh project

Documentation: https://fresh.deno.dev/

Package: https://deno.land/x/lemon_drop/

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

# Calorie notes

# Using the DigitalOcean PostgreSQL database

https://medium.com/deno-the-complete-reference3-ways-of-accepting-self-signed-certificates-in-deno-9c9286ab957

Using DigitalOcean's CA Cert the following modification was needed to accept
self-signed certificates. Modify the deno.json file's start task to include the
following command line arguments:

--cert ./ca-certificate.crt
