export default function Login() {
  return (
    <section style={{ padding: "40px", maxWidth: "400px",height:"300px",maxHeight: "700px", margin: "auto",boxShadow: "0 5px 20px rgba(0,0,0,.20)",marginTop:"80px" ,borderRadius:"10px"}}>
      <h1>Login</h1>

      <form>
        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: "10px",marginTop:"10px",borderRadius:"9px"}}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "10px",marginTop:"10px",borderRadius:"9px" }}
        />

        <button style={{ width: "50%", padding: "10px",marginTop:"20px",marginLeft:"100px",borderRadius:"9px"  }}>
          Login
        </button>
      </form>
    </section>
  );
}
