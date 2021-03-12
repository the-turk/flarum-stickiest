<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Sticky\Query;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;

class StickyFilterGambit extends AbstractRegexGambit implements FilterInterface
{
    /**
     * {@inheritdoc}
     */
    protected $pattern = 'is:sticky';

    public function getFilterKey(): string
    {
        return 'sticky';
    }

    /**
     * {@inheritdoc}
     */
    public function filter(FilterState $filterState, string $filterValue, $negate)
    {
        $filterState->getQuery()->where('is_sticky', ! $negate);
    }

    /**
     * {@inheritdoc}
     */
    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $search->getQuery()->where('is_sticky', ! $negate);
    }
}
