"use client";

import PropTypes from "prop-types";

// import { GuestGuard } from "src/auth/guard";
import AuthClassicLayout from "src/layouts/auth/classic";

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    // <GuestGuard>
    // </GuestGuard>
    <AuthClassicLayout title="Bekerja Secukupnya Liburan Sepuasnya">
      {children}
    </AuthClassicLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
