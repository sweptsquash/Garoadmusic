<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\MessageObserver;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $subject
 * @property string $message
 * @property string|null $ip_address
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder<static>|Message newModelQuery()
 * @method static Builder<static>|Message newQuery()
 * @method static Builder<static>|Message query()
 * @method static Builder<static>|Message whereCreatedAt($value)
 * @method static Builder<static>|Message whereEmail($value)
 * @method static Builder<static>|Message whereId($value)
 * @method static Builder<static>|Message whereIpAddress($value)
 * @method static Builder<static>|Message whereMessage($value)
 * @method static Builder<static>|Message whereName($value)
 * @method static Builder<static>|Message whereSubject($value)
 * @method static Builder<static>|Message whereUpdatedAt($value)
 *
 * @mixin Model
 */
#[ObservedBy(MessageObserver::class)]
#[Fillable([
    'name',
    'email',
    'subject',
    'message',
    'ip_address',
])]
class Message extends Model {}
