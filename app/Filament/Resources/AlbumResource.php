<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AlbumResource\Pages\CreateAlbum;
use App\Filament\Resources\AlbumResource\Pages\EditAlbum;
use App\Filament\Resources\AlbumResource\Pages\ListAlbums;
use App\Models\Album;
use App\Models\Project;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Validation\Rules\File;

class AlbumResource extends Resource
{
    protected static ?string $model = Album::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('project_id')
                    ->label('Project')
                    ->options(Project::query()->select('name', 'id')->get())
                    ->searchable()
                    ->columnSpanFull(),

                TextInput::make('name')
                    ->required()
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                SpatieMediaLibraryFileUpload::make('cover')
                    ->collection('cover')
                    ->hint('Recommended size: 512x512, must be no larger than 5MB')
                    ->image()
                    ->disk(config('media-library.disk_name'))
                    ->rules([
                        File::image()->max('5mb'),
                    ])
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('url')
                    ->required()
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListAlbums::route('/'),
            'create' => CreateAlbum::route('/create'),
            'edit' => EditAlbum::route('/{record}/edit'),
        ];
    }
}
