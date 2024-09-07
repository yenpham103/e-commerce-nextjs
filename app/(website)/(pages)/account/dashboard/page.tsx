import { SignOutButton, UserButton } from '@clerk/nextjs';

export default function page() {
  return (
    <div>
      this is a protected page
      <UserButton />
      <SignOutButton />
    </div>
  );
}
