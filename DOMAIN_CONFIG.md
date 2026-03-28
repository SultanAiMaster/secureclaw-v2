🔑 Domain Configuration: beuniqueshop.in

## DNS Configuration for Vercel

You own: beuniqueshop.in

### Add These DNS Records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 1 hour |
| CNAME | www | cname.vercel-dns.com | 1 hour |

### Alternative (if using HTTPS):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | @ | cname.vercel-dns.com | 1 hour |
| CNAME | www | cname.vercel-dns.com | 1 hour |

### For Vercel Custom Domain:

1. Login to Vercel: https://vercel.com
2. Go to: Your Project → Settings → Domains
3. Add domain: beuniqueshop.in
4. Add domain: www.beuniqueshop.in
5. Vercel will provide DNS records to add

### SSL Certificate:

Vercel provisions automatic SSL for custom domains:
- https://beuniqueshop.in ✓
- https://www.beuniqueshop.in ✓

### Domain Redirects (Optional):

Set redirect in Vercel:
- www.beuniqueshop.in → beuniqueshop.in (maintain canonical URL)

### Verify Domain:

After adding DNS records, verify:
1. DNS propagation (5-30 minutes)
2. SSL certificate provisioning
3. Website loads at https://beuniqueshop.in

### Test DNS:

```bash
# Test A record
nslookup beuniqueshop.in

# Test CNAME
nslookup www.beuniqueshop.in

# Check DNS propagation
dig beuniqueshop.in A
```

### Environment Variables Update:

Update NEXT_PUBLIC_API_URL:
```
NEXT_PUBLIC_API_URL = https://beuniqueshop.in
```

This ensures:
- Correct canonical URLs
- Proper API calls
- SEO-friendly links
- Social sharing works correctly