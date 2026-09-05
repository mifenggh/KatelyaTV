// functions/api/test.js
export function onRequest(context) {
    return new Response(JSON.stringify({ ok: true, message: "Test OK" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}