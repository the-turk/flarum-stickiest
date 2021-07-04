<?php

namespace TheTurk\Stickiest\Provider;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Sticky\PinStickiedDiscussionsToTop as StickyPin;
use TheTurk\Stickiest\PinStickiedDiscussionsToTop as StickiestPin;

class PinProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->bind(StickyPin::class, StickiestPin::class);
    }
}