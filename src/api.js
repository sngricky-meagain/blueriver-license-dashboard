const API = 'https://api.blueriver.cc';

export async function generateLicense(tier, days) {
  const resp = await fetch(`${API}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tier, days })
  });
  return resp.json();
}

export async function fetchLicenses() {
  const resp = await fetch(`${API}/admin/list`);
  return resp.json();
}
