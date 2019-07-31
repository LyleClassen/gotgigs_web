import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Page1 = lazy(() => import('pages/page1'));
const Page2 = lazy(() => import('pages/page2'));

const StyledTransitionGroup = styled(TransitionGroup)`
  .pageSlider-enter {
    min-width: 100%;
    transform: translate3d(100%, 0, 0);
    position: absolute;
  }

  .pageSlider-enter.pageSlider-enter-active {
    min-width: 100%;
    transform: translate3d(0, 0, 0);
    transition: all 600ms;
    position: absolute;
  }

  .pageSlider-exit {
    min-width: 100%;
    transform: translate3d(0, 0, 0);
    position: absolute;
  }

  .pageSlider-exit.pageSlider-exit-active {
    min-width: 100%;
    transform: translate3d(-100%, 0, 0);
    transition: all 600ms;
    position: absolute;
  }
`;

const Routes = () => (
  <Route
    render={({ location }) => (
      <StyledTransitionGroup>
        <CSSTransition key={location.key} timeout={600} classNames="pageSlider">
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch location={location}>
                <Route path="/" exact component={Page1} />
                <Route path="/page2" component={Page2} />
              </Switch>
            </Suspense>
          </div>
        </CSSTransition>
      </StyledTransitionGroup>
    )}
  />
);

export default Routes;
