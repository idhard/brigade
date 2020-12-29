import React, { Component } from "react";

import { getSession, signIn } from "next-auth/client";
import AccessDenied from '../components/AccessDenied';

type AuthenticatedProps = {
  user?: any;
  loading: boolean;
  children: React.ReactChild | React.ReactChildren;
};

export default function withAuth(
  InnerComponent: React.ElementType | React.FunctionComponent
): React.ComponentType {
  return class Authenticated extends Component<AuthenticatedProps> {
    static async getInitialProps(ctx) {
      const session = await getSession(ctx);
      if (!session || !session.user) {
        // ctx.res.writeHead(302, {
        //   Location: createLoginUrl(ctx.req.url),
        // });
        // ctx.res.end();
        return {};
      }

      return { user: session.user };
    }

    constructor(props) {
      super(props);
    }

    render() {
      if (!this.props.user) {
        return <AccessDenied/>;
      }

      return (
        <div>{<InnerComponent {...this.props} user={this.props.user} />}</div>
      );
    }
  };
}
