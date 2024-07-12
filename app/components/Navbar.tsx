// components/Navbar.tsx

// ...
<Menu.Item>
  {({ active }) => (
    <button
      className={classNames(
        active ? "bg-gray-100" : "",
        "flex w-full px-4 py-2 text-sm text-gray-700"
      )}
      onClick={() => alert("github")}
    >
      Sign in
    </button>
  )}
</Menu.Item>
// ...
