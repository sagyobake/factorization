function handler(_req) {
    const html = Deno.readFile('./index.html');
    // Create a response with html as its body.
    const response = new Response(html, {
        status: 200,
        headers: {
            "content-type": "text/html",
        },
    });

    console.log(response.status); // 200
    console.log(response.headers.get("content-type")); // text/html

    return response;
}

Deno.serve(handler);
